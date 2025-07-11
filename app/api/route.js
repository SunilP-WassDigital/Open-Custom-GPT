import { NextResponse } from 'next/server'

export async function GET(request) {
    var url = new URL(request.url)
    const assistantId = url.searchParams.get("assistantId")
    
    // Get data from environment variables
    const openAIKey = process.env.OPENAI_KEY || "";
    const assistantsData = process.env.ASSISTANTS ? JSON.parse(process.env.ASSISTANTS) : {};
    
    let resData
    if(assistantId!=null){
        let getAssistant
        if(assistantId=="new"){
            getAssistant = null
        }else{
            getAssistant = assistantsData[assistantId]
        }
        resData = {openAIKey: openAIKey, assistant: getAssistant}
    }else{
        resData = {openAIKey: openAIKey, assistants: assistantsData}
    }
    return NextResponse.json(resData)
}

