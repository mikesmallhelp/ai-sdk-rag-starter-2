import { createResource } from '@/lib/actions/resources';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const content = await req.text();

    console.log('content:', content);

    if (!content || typeof content !== 'string') {
      return NextResponse.json({ error: 'Invalid content' }, { status: 400 });
    }

    await createResource({ content });
    return NextResponse.json({ message: 'Resource created successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
  }
}