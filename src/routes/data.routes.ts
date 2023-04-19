import { Request, Response, Router } from "express";
import { Data } from '../models/data.model';
import customerDataSchema from '../validation/customer.validation'; // Update the import statement
import companyDataSchema from '../validation/data.validation';
import { v4 as uuidv4 } from 'uuid';

const router = Router();
let data: Data[] = [];
const exampleData: string[] = [];

interface DataBody {
  data: string;
}

router.post("/data", (req: Request & { body: DataBody }, res: Response) => {
  const { data } = req.body;
  exampleData.push(data);
  const msg = {
    status: "200 OK",
    message: exampleData,
  };
  res.json(msg);
});

router.get("/data", (req: Request, res: Response) => {
  const msg = {
    status: "200 OK",
    message: exampleData,
  };
  res.json(msg);
});

// POST /checkout
router.post('/checkout', (req: Request, res: Response) => {
  try {
    const { error, value } = companyDataSchema.validate(req.body.companyData);

    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const newData: Data = {
      id: uuidv4(),
      companyData: value
    };

    data.push(newData);

    return res.status(201).json(newData);
  } catch (err) {
    return res.status(500).json({ error: 'Internal server error' });
  }
});


// PUT /data/:id
router.put('/checkout/:id', (req: Request, res: Response) => {
  const id = req.params.id; // Get ID from URL params
  const customerData = req.body.customerData; // Get customerData from request body

  // Validate customerData against customerDataSchema
  const { error } = customerDataSchema.validate(customerData);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  // Find index of data based on ID
  const dataIndex = data.findIndex(item => item.id === id);

  if (dataIndex === -1) {
    return res.status(404).json({ error: 'Data not found' });
  }

  // Update customerData while keeping other properties unchanged
  data[dataIndex].customerData = { ...data[dataIndex].customerData, ...customerData };

  res.json(data[dataIndex]); // Return updated data
});


// GET /data/:id
router.get('/checkout/:id', (req: Request, res: Response) => {
  const id = req.params.id; // Get ID from URL params

  // Find data based on ID
  const foundData = data.find(item => item.id === id);

  if (!foundData) {
    return res.status(404).json({ error: 'Data not found' });
  }

  res.json(foundData); // Return data
});


export { router };
