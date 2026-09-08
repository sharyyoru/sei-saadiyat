'use client';

import { supabase } from './supabase';
import { generateSessionId, getUTMParams } from './utils';

export type EventType =
  | 'page_view'
  | 'scroll_depth'
  | 'video_play'
  | 'video_progress'
  | 'video_pause'
  | 'video_complete'
  | 'cta_click'
  | 'form_start'
  | 'form_submit'
  | 'modal_open'
  | 'modal_close'
  | 'section_view';

interface EventData {
  [key: string]: string | number | boolean | undefined;
}

export async function trackEvent(
  eventType: EventType,
  eventData?: EventData
): Promise<void> {
  try {
    if (!supabase) return;
    
    const sessionId = generateSessionId();
    const utmParams = getUTMParams();

    await supabase.from('events').insert({
      session_id: sessionId,
      event_type: eventType,
      event_data: eventData || {},
      page_url: window.location.href,
      referrer: document.referrer || null,
      user_agent: navigator.userAgent,
      ...utmParams,
    });
  } catch (error) {
    console.error('Error tracking event:', error);
  }
}

export function trackPageView(): void {
  trackEvent('page_view', {
    title: document.title,
    path: window.location.pathname,
  });
}

export function trackScrollDepth(depth: number): void {
  trackEvent('scroll_depth', { depth });
}

export function trackVideoEvent(
  action: 'play' | 'pause' | 'progress' | 'complete',
  progress?: number
): void {
  const eventType: EventType =
    action === 'play'
      ? 'video_play'
      : action === 'pause'
      ? 'video_pause'
      : action === 'complete'
      ? 'video_complete'
      : 'video_progress';

  trackEvent(eventType, { progress });
}

export function trackCTAClick(ctaName: string, section?: string): void {
  trackEvent('cta_click', { cta_name: ctaName, section });
}

export function trackFormStart(): void {
  trackEvent('form_start');
}

declare global {
  interface Window {
    oaiq?: (action: string, event: string, data?: Record<string, unknown>) => void;
  }
}

export function trackFormSubmit(success: boolean): void {
  // Track lead_created event for OpenAI pixel
  if (success && typeof window !== 'undefined' && window.oaiq) {
    window.oaiq('measure', 'lead_created', { type: 'customer_action' });
  }
  trackEvent('form_submit', { success });
}

export function trackModalOpen(modalName: string): void {
  trackEvent('modal_open', { modal_name: modalName });
}

export function trackSectionView(sectionName: string): void {
  trackEvent('section_view', { section_name: sectionName });
}
