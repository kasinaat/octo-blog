const chai = require('chai')
const should = chai.should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const server = "http://localhost:5000"
describe("GET /api/users", ()=> {

    it('should respond with all users data', (done)=>{
        chai.request(server).get('/api/users').send().end((err, resp)=>{
            should.not.exist(err);
            resp.status.should.equal(200);
            resp.type.should.equal('application/json');
            resp.body.status.should.eql('success');
            resp.body.data[0].should.include.keys(
                'id', 'username', 'email'
            );
            done();
        });
    });
});

describe("POST /api/user/new", ()=> {
   it("Should create a new user", (done)=>{
        chai.request(server).post('/api/user/new').send({
            userName:"kasinaat",
            password: "Laptop@123",
            email:"kasinaat007@gmail.com",
            firstName: "Kasinaat",
            lastName: "SS"
        }).end((err, resp)=> {
            should.not.exist(err);
            resp.status.should.equal(200);
            resp.type.should.equal("application/json");
            resp.body.status.should.equal("success");
            done();
        });
   }) 
});