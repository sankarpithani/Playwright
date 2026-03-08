import{test,expect} from "@playwright/test"
import{common} from '../../utils/commonfun'
test("API POST testing",async ({request})=>{
    const requestAPI = new common(request,"https://jsonplaceholder.typicode.com")
    const payload = {
    title: 'foo',
    body: 'bar',
    userId: 8,
    }
    const headers = {
        'content-type':'application/json'
    }
    const response = await requestAPI.post("/posts",payload,headers)
const jsonrresponse = await response.json()
console.log(jsonrresponse)
})