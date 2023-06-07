import { randomUUID } from 'crypto'
import { encrypt } from '@/utils'

export default class baseClient {
	public privateKey: string = 'RfUjXn2r5u8x/A?D'
	public publicKey: string = 'RfUjXn2r5u8x/A?D'
	public data: string = ''
	public requets_id: string = 'key'
	public requets_time: string = 'key'
	public signature: string = ''

	public Request: Function = (data: any) => {
		this.data = encrypt.AES(data, this.privateKey)
		this.signature = encrypt.SHA256WithRSA(data, this.privateKey)
		this.requets_id = randomUUID()
		this.requets_time = new Date().toUTCString()
	}
}
