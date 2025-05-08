import { NextResponse } from 'next/server'

export function middleware() {
  console.log('middleware called')
  return NextResponse.next()
}