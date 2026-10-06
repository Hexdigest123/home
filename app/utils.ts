const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

export function checkEmail(email: string): boolean {
  if (emailRegex.test(email)) {
    return true;
  } else {
    return false;
  }
}

export function checkPassword(password: string): boolean {
  if (passwordRegex.test(password)) {
    return true;
  } else {
    return false;
  }
}
