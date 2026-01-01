export interface Course {
  id: string;
  title: string;
  modules: number;
}

export interface ModuleContent {
  content: string;
}

export interface CheckoutSession {
  sessionId: string;
  url: string;
}

export interface PaymentStatus {
  status: string;
  customerEmail?: string;
}
