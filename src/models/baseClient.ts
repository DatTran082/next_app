var CryptoJS = require('crypto-js')
import decrypt from '../common/decrypt'
import encrypt from '../common/encrypt'

export default class baseClient extends encrypt implements decrypt {
	public static privateKey: string = 'RfUjXn2r5u8x/A?D'
	public static publicKey: string = 'RfUjXn2r5u8x/A?D'
	public data: string = ''
	public requets_id: string = 'key'
	public signature: string = ''
}
