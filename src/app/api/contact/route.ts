import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const { name, email, phone, company, productInterest, targetMarket, message } = body

    if (!name || !email || !message || !company || !productInterest || !targetMarket) {
      return NextResponse.json({ error: "All required fields must be filled" }, { status: 400 })
    }

    // Create transporter using environment variables
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    // Email to company
    const companyEmailContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Product Interest:</strong> ${productInterest}</p>
      <p><strong>Target Market:</strong> ${targetMarket}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br>")}</p>
    `

    // Email to customer
    const customerEmailContent = `
      <h2>Thank You for Contacting Sam Commodities</h2>
      <p>Dear ${name},</p>
      <p>We have received your inquiry and appreciate your interest in our premium Ethiopian agricultural products.</p>
      <p>Our team will review your message and get back to you within 24 hours.</p>
      <p><strong>Your Submission Details:</strong></p>
      <ul>
        <li>Product Interest: ${productInterest}</li>
        <li>Target Market: ${targetMarket}</li>
      </ul>
      <p>Best regards,<br>Sam Commodities Team</p>
    `

    // Send email to company
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "samagricomm@gmail.com",
      subject: `New Contact Form Submission from ${name}`,
      html: companyEmailContent,
    })

    // Send confirmation email to customer
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "We Received Your Message - Sam Commodities",
      html: customerEmailContent,
    })

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully. We will respond within 24 hours.",
    })
  } catch (error) {
    console.error("Contact API error:", error)
    return NextResponse.json({ error: "Failed to send message. Please try again later." }, { status: 500 })
  }
}
