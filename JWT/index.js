const jwt = require("jsonwebtoken");
const jwtPassword = "secret";
const zod = require("zod");

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

function signJWT(username, password) {
  const usernameResponse = emailSchema.safeParse(username);
  const passwordResponse = passwordSchema.safeParse(password);

  if (!usernameResponse.success || !passwordResponse.success) {
    return null;
  }

  const signature = jwt.sign(
    {
      username,
    },
    jwtPassword
  );

  jwt.sign(
    {
      username,
    },
    jwtPassword
  );
  return signature;
}

function decodedJwt(token) {
  const decoded = jwt.decode(token);
  if (decoded) return true;
  return false;
}

function verifyJwt(token) {
  try {
    jwt.verify(token, jwtPassword);
    return true;
  } catch (e) {
    return false;
  }
}

const ans = signJWT("sejal@gmail.com", "111111");
console.log(ans);
console.log(decodedJwt(ans + "sdk d"));
console.log(verifyJwt(ans + "skf "));
