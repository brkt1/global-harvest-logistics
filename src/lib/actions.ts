'use server';

import { revalidatePath } from 'next/cache';

export async function submitQuote(formData: FormData) {
  const quoteData = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    phone: formData.get('phone') as string,
    origin: formData.get('origin') as string,
    destination: formData.get('destination') as string,
    cargoType: formData.get('cargoType') as string,
    weight: formData.get('weight') as string,
    date: formData.get('date') as string,
  };

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/quote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(quoteData),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Failed to submit quote');
    }

    // Revalidate the quote page to show updated data
    revalidatePath('/quote');
    
    return { success: true, data: result };
  } catch (error) {
    console.error('Quote submission error:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Failed to submit quote' 
    };
  }
}

export async function submitContact(formData: FormData) {
  const contactData = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    phone: formData.get('phone') as string,
    company: formData.get('company') as string,
    subject: formData.get('subject') as string,
    message: formData.get('message') as string,
  };

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactData),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Failed to submit contact form');
    }

    revalidatePath('/contact');
    
    return { success: true, data: result };
  } catch (error) {
    console.error('Contact submission error:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Failed to submit contact form' 
    };
  }
}

export async function trackShipment(trackingNumber: string) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/track?trackingNumber=${trackingNumber}`);
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to track shipment');
    }

    const result = await response.json();
    return { success: true, data: result };
  } catch (error) {
    console.error('Tracking error:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Failed to track shipment' 
    };
  }
}
