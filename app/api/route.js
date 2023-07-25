import InfisicalClient from "infisical-node";
import { NextResponse } from "next/server";

export async function GET(request) {
    
    const client = new InfisicalClient({
        token: 'st.64bf8d8716519e5d38a83177.f5b01af38fdc3dbc6b5a1d2ee2ffbf53.129d441df97339a78913a20b55500f0a',
        siteURL: 'https://kms.wangjun.dev'
    });

    // 获取KMS配置
    const mongo = await client.getSecret('MONGO_URL',  {
        environment: "dev",
        path: "/",
        type: "shared",
    })

    // 定义返回结果
    const result = {
        success: true,
        data: mongo.secretValue
    }

    return NextResponse.json(result);
}