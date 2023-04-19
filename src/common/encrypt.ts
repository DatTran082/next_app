var CryptoJS = require('crypto-js')

export default class encrypt {
	public static AES(rawData: string, privateKey: string): string {
		// return CryptoJS.AES.encrypt(rawData, privateKey).toString()
		return Buffer.from(rawData, 'binary').toString('base64')
	}

	public static TrippleDes(rawData: string, privateKey: string): string {
		return ''
	}

	public static SHA256WithRSA(rawData: string, privateKey: string): string {
		return ''
	}
}
