import { NextResponse } from "next/server";

const GOOGLE_SCRIPT_URL =
  process.env.GOOGLE_SCRIPT_URL ||
  "https://script.google.com/macros/s/AKfycbz-ev3srwJRs9k2Kx09nqZOppmF3jfz69h_Z4wMNo66T7Fz5XKLpWqy9gLCh8877uX4/exec";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const payload = {
      protocolo: body.protocolo || "",
      empresa: body.empresa || "",
      cnpj: body.cnpj || "",
      contato: body.contato || "",
      email: body.email || "",
      telefone: body.telefone || "",
      prazo: body.prazo || "",
      materiais: body.materiais || "",
      observacoes: body.observacoes || "",
      arquivoNome: body.arquivoNome || "",
      arquivoTipo: body.arquivoTipo || "",
      arquivoBase64: body.arquivoBase64 || "",
    };

    console.log("-> Recebendo cotação para:", payload.empresa, "| Anexo:", payload.arquivoNome, "| Tamanho Base64:", payload.arquivoBase64 ? payload.arquivoBase64.length : 0);

    const googleRes = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      redirect: "follow",
    });

    const text = await googleRes.text();
    console.log("<- Resposta do Google Apps Script:", text);

    return NextResponse.json({
      success: true,
      message: "Cotação registrada com sucesso no Google Sheets",
      debug: text ? text.slice(0, 200) : null,
    });
  } catch (error) {
    console.error("Erro na API de cotação:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Falha ao encaminhar dados para a planilha",
      },
      { status: 500 }
    );
  }
}
