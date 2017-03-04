import { LoggerService } from './logger.service';
describe('Logger Service', () => {
	let logger: LoggerService;
	let testMessage = "testMessage";
	beforeEach(() => {
        logger = new LoggerService();
    });
    it('should define service', () => {
    	expect(logger).toBeDefined();
    });

    it('should call log method', () => {
    	spyOn(console, 'log');
    	logger.log(testMessage);
    	expect(logger.log).toBeDefined();
    	expect(console.log).toHaveBeenCalledWith(`%c[LOG-MESSAGE] #-> ` + testMessage, `color : black`);
    });

    it('should call success method', () => {
    	spyOn(console, 'log');
    	logger.success(testMessage);
    	expect(logger.log).toBeDefined();
    	expect(console.log).toHaveBeenCalledWith(`%c[LOG-MESSAGE] #-> ` + testMessage, `color : green`);
    });

    it('should call warning method', () => {
    	spyOn(console, 'warn');
    	logger.warning(testMessage);
    	expect(logger.log).toBeDefined();
    	expect(console.warn).toHaveBeenCalledWith(`%c[LOG-MESSAGE] #-> ` + testMessage, `color : orange`);
    });

    it('should call info method', () => {
    	spyOn(console, 'info');
    	logger.info(testMessage);
    	expect(logger.info).toBeDefined();
    	expect(console.info).toHaveBeenCalledWith(`%c[LOG-MESSAGE] #-> ` + testMessage, `color : blue`);
    });

    it('should call info method', () => {
    	spyOn(console, 'error');
    	logger.error(testMessage);
    	expect(logger.error).toBeDefined();
    	expect(console.error).toHaveBeenCalledWith(`%c[LOG-MESSAGE] #-> ` + testMessage, `color : red`);
    });
})