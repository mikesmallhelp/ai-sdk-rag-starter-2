import { createResource } from '@/lib/actions/resources';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { content } = await req.json();
  await createResource({ content });
  return new NextResponse(null, { status: 200 });
}