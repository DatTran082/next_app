import { decrypt } from '@/common'
import baseClient from './baseClient'

export class response extends baseClient {
	code: string = ''
	message: string = ''
	response_time: string = new Date().toISOString()

	constructor(data: string, requets_id: string, signature: string) {
		super()
		this.data = decrypt.AES(data, '')
		this.requets_id = requets_id
		this.signature = signature
	}

	public static deCryptData(toDeCryptData: any): string {
		return decrypt.AES(toDeCryptData, this.privateKey)
	}

	public static verifySignature(signature: string): string {
		return decrypt.Verify(signature, this.publicKey)
	}
}
