import axios from 'axios';

const url = 'https://localhost:5001/api/Patient/pages/1';

class FHIRClient 
{
    static async getPatients()
    {
        const res = await axios.get(url);
        const data = res.data;
        console.log(data[0].entry);
        return data[0].entry;
    }
}

export default FHIRClient;