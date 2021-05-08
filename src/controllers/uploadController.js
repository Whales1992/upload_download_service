import { upload } from '../service/uploadService.js';

const uploadFile = async (req, res) => {
  try {
    let result = await upload(req);
    res.status(200).json({ data: result.data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }

  //   res.json({ msg: 'hello', data });
};

export { uploadFile };
