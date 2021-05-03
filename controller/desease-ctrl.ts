import db from "../db";

const SelectAll: any;
(req: any, res: { send: (arg0: any) => void }) => {
  db.all(`SELECT * FROM diseases`, (err: any, data: any) => {
    res.send(data);
  });
};

const SelectDesease: any;
(req: { params: { name: any } }, res: { send: (arg0: any) => void }) => {
  db.all(
    `SELECT * FROM diseases WHERE name=${req.params.name} `,
    (err: any, data: any) => {
      res.send(data);
    }
  );
};

const CreateDesease: any;
(
  req: {
    body: { name: any; picture: any; patient_name: any; patient_age: any };
  },
  res: { send: (arg0: any) => void }
) => {
  const { name, picture, patient_name, patient_age } = req.body;
  db.all(
    `INSERT INTO diseases values name
      picture
      patient_name
      patient_age VALUES(${name},${picture},${patient_name},${patient_age},) `,
    (err: any, data: any) => {
      res.send(data);
    }
  );
};

const UpdateDesease: any;
(
  req: {
    body: {
      id: any;
      name: any;
      picture: any;
      patient_name: any;
      patient_age: any;
    };
  },
  res: { send: (arg0: any) => void }
) => {
  const { id, name, picture, patient_name, patient_age } = req.body;
  db.all(
    `UPDATE diseases
        SET name=${name}, picture=${picture} patient_name=${patient_name} patient_age=${patient_age}
        WHERE id=${id}   `,
    (err: any, data: any) => {
      res.send(data);
    }
  );
};

const DeleteDesease: any(req: { params: { id: any } }, res: { send: (arg0: any) => void }) => {
  const { id } = req.params;
  db.all(`DELETE FROM diseases WHERE WHERE id=${id}`, (err: any, data: any) => {
    res.send(data);
  });
};

export default {
  SelectAll,
  SelectDesease,
  CreateDesease,
  UpdateDesease,
  DeleteDesease,
};
