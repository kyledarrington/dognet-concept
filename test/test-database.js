import {
    assert
} from 'chai';
import pool from '../database/database.js';


describe('database', () => {
    describe('connection', () => {
        it('connects', async function () {
            var connection = await pool.getConnection;
            assert.isOk(connection);
        });
    });
});
