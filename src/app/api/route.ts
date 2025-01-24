import { BACKEND_URL } from "@/config/constants"
import { type NextRequest } from 'next/server'
export const revalidate = 2 // invalidate every hour
 
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const url = searchParams.get('url')
    const res = await fetch(BACKEND_URL+url,{ cache: 'no-store' })
    const data = await res.json()
   
    return Response.json({ data })
  }