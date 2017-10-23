 namespace bunCB {
	 /************************************************************************************************************************************************
	* micro:bit Servo:Lite / :MOVE mini blocks
	************************************************************************************************************************************************/
 /**
     * Drives forwards. Call stop to stop
     */
    //% subcategory=ServoLite
    //% blockId=kitronik_servolite_servos_forward
    //% block="drive forward"
    export function forward(): void {
        pins.digitalWritePin(DigitalPin.P16, 1)
		pins.digitalWritePin(DigitalPin.P15, 1)
		pins.digitalWritePin(DigitalPin.P0, 0)
		pins.digitalWritePin(DigitalPin.P1, 0)
    }
 }
	