const mongoose = require("mongoose");
const crypto = globalThis.crypto

const messageSchema = mongoose.Schema(
  {
    sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    content: { type: String, trim: true},
    chat: { type: mongoose.Schema.Types.ObjectId, ref: "Chat" },
    readBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  { 
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' }
  }
);

/*async function aesEncrypt(plaintext) {
  const ec = new TextEncoder();
  const key = await generateAesKey();
  const iv = crypto.getRandomValues(new Uint8Array(16));

  const ciphertext = await crypto.subtle.encrypt({
    name: 'AES-CBC',
    iv,
  }, key, ec.encode(plaintext));

  return {
    key,
    iv,
    ciphertext,
  };
}


messageSchema.pre("save", async function (next) {
  if (!this.isModified) {
    next();
  }

  this.content = await aesEncrypt(this.content)
});
*/
const Message = mongoose.model("Message", messageSchema);
module.exports = Message;
