import { NextResponse } from 'next/server'

export async function POST(request) {
    const req = await request.json()
    
    // NOTE: Environment variables are read-only at runtime
    // You need to use a database for dynamic updates or set this as a static environment variable
    
    // TODO: Replace with your preferred solution
    // Option 1: Make OpenAI key static (set OPENAI_KEY environment variable)
    // Option 2: Use database for dynamic updates
    // Option 3: Return current environment variable value
    
    return NextResponse.json({
        "error": "Environment variables are read-only. OpenAI key should be set as OPENAI_KEY environment variable in Vercel.",
        "current_openai_key": process.env.OPENAI_KEY || "",
        "suggestion": "Set OPENAI_KEY as environment variable in Vercel dashboard"
    }, { status: 501 })
}

