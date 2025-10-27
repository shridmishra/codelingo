import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dbConnect from '@/app/lib/dbConnect';
import User from '@/app/models/User';

export async function POST(req: Request) {
  await dbConnect();

  const { email: identifier, password } = await req.json();

  try {
    if (!identifier || !password) {
      return NextResponse.json({ message: 'Please provide credentials' }, { status: 400 });
    }
    
    const user = await User.findOne({
        $or: [
            { email: identifier.toLowerCase() },
            { username: new RegExp(`^${identifier}$`, 'i') }
        ]
    });

    if (!user) {
        return NextResponse.json({ message: 'Invalid credentials' }, { status: 400 });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return NextResponse.json({ message: 'Invalid credentials' }, { status: 400 });
    }

    const payload = { user: { id: user.id } };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '7d' });

    return NextResponse.json({ 
        token,
        user: { id: user.id, username: user.username, email: user.email }
    });

  } catch (error) {
    console.error(error.message);
    return NextResponse.json({ message: 'Server Error' }, { status: 500 });
  }
}
