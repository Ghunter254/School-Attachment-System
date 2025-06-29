import custAxios from "@/hooks/custAxios";

export async function loginUser(user: { email: string; password: string }) {
  try {
    const res = await custAxios.post("/auth/login", user);
    console.log(res);
    return res.data;
  } catch (error) {
    console.error("error in login");
  }
}

export async function registerUser(user: {
  role: string;
  name: string;
  password: string;
  email: string;
}) {
  try {
    const res = await custAxios.post("/auth/create-user", user);
    console.log(res);
    return res.data;
  } catch (error) {
    console.error("error in login");
  }
}
