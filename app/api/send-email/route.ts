import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // CONFIGURACIÓN SMTP - CAMBIA según tu proveedor
    const transporter = nodemailer.createTransport({
      host: 'mail.ggsa.com.ve',  // ← PIDE A TU HOSTING
      port: 465,                 // ← 465 (SSL) o 587 (TLS)
      secure: true,              // ← true para 465
      auth: {
        user: process.env.EMAIL_USER!,
        pass: process.env.EMAIL_PASS!
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    /* const ccEmails = process.env.EMAIL_CC?.split(',') || []; */

    const mailOptions = {
      from: `"GGSA Asesores" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USERTO,
      /* cc: ccEmails, */
      subject: `🆕 Nuevo contacto web: ${body.nombre}`,
      html: `
        <div style="font-family: -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,sans-serif; max-width: 600px; margin: 0 auto; line-height: 1.6; color: #333;">
          <div style="background: linear-gradient(135deg, #006760 0%, #044559 100%); padding: 40px 20px; text-align: center; border-radius: 16px 16px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 32px; font-weight: 800;">📧 Nuevo Contacto</h1>
            <p style="color: white; opacity: 0.9; margin: 8px 0 0 0; font-size: 16px;">GGSA Asesores Contables</p>
          </div>
          
          <div style="background: white; padding: 40px 30px; box-shadow: 0 20px 60px rgba(0,0,0,0.1); border-radius: 0 0 16px 16px;">
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
              <tr>
                <td style="padding: 16px 12px 16px 0; font-weight: 700; color: #006760; width: 130px; vertical-align: top;">👤 Nombre:</td>
                <td style="padding: 16px 0; font-size: 18px; color: #1a1a1a; border-bottom: 2px solid #f0f0f0;">${body.nombre}</td>
              </tr>
              <tr>
                <td style="padding: 16px 12px 16px 0; font-weight: 700; color: #006760; vertical-align: top;">📧 Email:</td>
                <td style="padding: 16px 0; font-size: 18px; color: #1a1a1a; border-bottom: 2px solid #f0f0f0;">
                  <a href="mailto:${body.email}" style="color: #006760; text-decoration: none;">${body.email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 16px 12px 16px 0; font-weight: 700; color: #006760; vertical-align: top;">📱 Teléfono:</td>
                <td style="padding: 16px 0; font-size: 18px; color: #1a1a1a; border-bottom: 2px solid #f0f0f0;">${body.telefono}</td>
              </tr>
              <tr style="background: #f8f9ff;">
                <td style="padding: 20px 12px 20px 0; font-weight: 700; color: #006760; vertical-align: top;">💬 Mensaje:</td>
                <td style="padding: 20px 0; font-size: 16px; line-height: 1.7; color: #1a1a1a; border-bottom: 2px solid #f0f0f0;">${body.comentarios.replace(/\n/g, '<br>')}</td>
              </tr>
            </table>

            <div style="background: linear-gradient(135deg, #006760, #044559); color: white; padding: 25px; border-radius: 12px; text-align: center; margin-top: 30px;">
              <h3 style="margin: 0 0 12px 0; font-size: 20px; color: white;">👥 GGSA Asesores Contables</h3>
              <p style="margin: 0 0 8px 0; font-size: 15px; opacity: 0.95; color: white;">
                ggsa@ggsa.com.ve | +58 412 3302158
              </p>
              <p style="margin: 0; font-size: 14px; opacity: 0.85; color: white;">
                📅 ${new Date().toLocaleString('es-VE')}<br>
                ℹ️ Recibir info: <strong style="color: white;">${body.recibir_info}</strong>
              </p>
            </div>
          </div>
        </div>
      `
    };

    // Verificar conexión
    await transporter.verify();
    console.log('✅ SMTP conectado');

    await transporter.sendMail(mailOptions);
    console.log('✅ Email enviado');

    return NextResponse.json({ success: true });
    
  } catch (error: any) {
    console.error('🚨 ERROR:', error.message);
    return NextResponse.json({ 
      success: false, 
      error: error.message 
    }, { status: 500 });
  }
}
