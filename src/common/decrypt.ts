var CryptoJS = require('crypto-js')

export default class decrypt {
	public static AES(toDecrypt: string, publicKey: string): string {
		// return CryptoJS.AES.decrypt(toDecrypt, publicKey).toString()
		return Buffer.from(toDecrypt, 'base64').toString('binary')
	}

	public static TrippleDes(rawData: string, privateKey: string): string {
		return ''
	}

	public static Verify(signature: string, publicKey: string): string {
		return ''
	}
}
