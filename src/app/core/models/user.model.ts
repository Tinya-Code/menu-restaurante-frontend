export interface User {
  id: string;
  email: string;
  phone: string | null;
  display_name: string;
  photo_url: string | null;
  created_at: string;
  updated_at: string;
  firebase_uid: string;
}
