import {
    assert
} from 'chai';
import pool from '../database/database.js';


describe('database', () => {
    describe('connection', () => {
            var connection;
            before(() => {
                return new Promise((resolve) => {
                    pool.getConnection((err, result) => {
                        if (err){
                            throw new Error('Connection Failed');   
                        }
                        connection = result;
                        resolve();
                    });
                });
            }); it('connects', () => {
            assert.isOk(connection);
        });
    });
});
