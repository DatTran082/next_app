import { encrypt } from '@/utils'
import baseClient from './baseClient'

export class request extends baseClient {
	requets_time: string = new Date().toISOString()

	constructor(data: string, signature: string) {
		super()
		this.data = data
		this.signature = signature
	}

	public static encryptData(toEncrypt: string): string {
		return encrypt.AES(toEncrypt, this.privateKey)
	}

	public static generateSignature(dataEncrypted: string): string {
		return encrypt.SHA256WithRSA(dataEncrypted, this.privateKey)
	}
}
