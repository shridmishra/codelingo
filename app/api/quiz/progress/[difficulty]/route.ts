import { NextResponse } from 'next/server';
import dbConnect from '@/app/lib/dbConnect';
import User from '@/app/models/User';
import { authMiddleware } from '@/app/lib/auth';

export async function DELETE(req: Request, { params }: { params: { difficulty: string } }) {
  await dbConnect();

  const user = authMiddleware(req);

  if (!user) {
    return NextResponse.json({ message: 'No token, authorization denied' }, { status: 401 });
  }

  try {
    const userFromDb = await User.findById(user.id);
    if (!userFromDb) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }
    
    userFromDb.quizProgress.delete(params.difficulty);
    await userFromDb.save();
    
    return NextResponse.json({ message: 'Progress reset' });

  } catch (error) {
    console.error(error.message);
    return NextResponse.json({ message: 'Server Error' }, { status: 500 });
  }
}
