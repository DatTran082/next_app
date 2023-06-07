var CryptoJS = require('crypto-js')

export default class decrypt {
	public static AES(toDecrypt: string, publicKey: string): string {
		// return CryptoJS.AES.decrypt(toDecrypt, publicKey).toString()
		return Buffer.from(toDecrypt, 'base64').toString('binary')
	}

	public static TrippleDes(toDecrypt: string, privateKey: string): string {
		return Buffer.from(toDecrypt, 'base64').toString('binary')
	}

	public static Verify(signature: string, publicKey: string): string {
		return Buffer.from(signature, 'base64').toString('binary')
	}
}
