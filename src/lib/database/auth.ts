import { supabase } from './supabase';

// 회원가입
export async function signUp(email: string, password: string, name: string, grade: number) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name,
        grade
      }
    }
  });

  if (error) {
    console.error('Error signing up:', error.message);
    return { user: null, error: error.message };
  }

  return { user: data.user, error: null };
}

// 로그인
export async function signIn(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    console.error('Error signing in:', error.message);
    return { user: null, session: null, error: error.message };
  }

  return { user: data.user, session: data.session, error: null };
}

// 로그아웃
export async function signOut() {
  const { error } = await supabase.auth.signOut();
  
  if (error) {
    console.error('Error signing out:', error.message);
    return { error: error.message };
  }

  return { error: null };
}

// 현재 사용자 가져오기
export async function getCurrentUser() {
  const { data: { user }, error } = await supabase.auth.getUser();
  
  if (error) {
    console.error('Error getting current user:', error.message);
    return null;
  }

  return user;
}

// 세션 가져오기
export async function getSession() {
  const { data: { session }, error } = await supabase.auth.getSession();
  
  if (error) {
    console.error('Error getting session:', error.message);
    return null;
  }

  return session;
}

// 비밀번호 재설정 이메일 전송
export async function resetPassword(email: string) {
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${window.location.origin}/auth/reset-password`
  });

  if (error) {
    console.error('Error sending reset email:', error.message);
    return { error: error.message };
  }

  return { error: null };
}

// 비밀번호 업데이트
export async function updatePassword(newPassword: string) {
  const { error } = await supabase.auth.updateUser({
    password: newPassword
  });

  if (error) {
    console.error('Error updating password:', error.message);
    return { error: error.message };
  }

  return { error: null };
}

// 인증 상태 변화 리스너
export function onAuthStateChange(callback: (event: string, session: any) => void) {
  const { data: { subscription } } = supabase.auth.onAuthStateChange(callback);
  return subscription;
}
