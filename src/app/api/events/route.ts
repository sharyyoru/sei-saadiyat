import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    if (!supabaseAdmin) {
      return NextResponse.json({ error: 'Database not configured' }, { status: 503 });
    }

    const body = await request.json();
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown';

    const { error } = await supabaseAdmin.from('events').insert({
      session_id: body.session_id,
      event_type: body.event_type,
      event_data: body.event_data || {},
      page_url: body.page_url,
      referrer: body.referrer,
      user_agent: body.user_agent,
      ip_address: ip,
      utm_source: body.utm_source,
      utm_medium: body.utm_medium,
      utm_campaign: body.utm_campaign,
    });

    if (error) {
      console.error('Event tracking error:', error);
      return NextResponse.json({ error: 'Failed to track event' }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error('Event tracking error:', error);
    return NextResponse.json({ error: 'Failed to track event' }, { status: 500 });
  }
}
