import axios from "axios";

const commonAPI = async (httpMethod,url,reqBody)=>{
const reqConfig = {
    method:httpMethod,
    // since key and value is url
    url,
    data:reqBody
}
return await axios(reqConfig).then(res=>{

 }).catch(err=>{
    return err
 })
}
export default commonAPI