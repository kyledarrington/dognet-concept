import {
    assert
} from 'chai';
import pool from '../database/database.js';


describe('database', () => {
    describe('connection', () => {
        it('connects', async () => {
        	try{
            	var connection = await pool.getConnection();
        	}
        	catch(err){
        		var message = err.message;
        	}
            assert.isDefined(connection, message);
        });
    });
    describe('query', () =>{
    	it('retrieves one post', async () => {
    		var queryString = 'SELECT id FROM post LIMIT 1';
    		try {
    			var result = await pool.query(queryString);
    		}
    		catch(err){
    			var message = err.message;
    		}
    		assert.isDefined(result, message);
    		assert.isArray(result);
    	});
    });
});
