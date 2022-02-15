import {
  Button,
  Card,
  CardContent,
  FormHelperText,
  Grid,
} from "@material-ui/core";
import { useRef, useState } from "react";
import axios from "axios";

export const ImageUploadForm = ({ handleClose, imageSubmit }) => {
  const [error, setError] = useState("");
  const fileInput = useRef(null);

  const handleImageUpload = async () => {
    const { files } = fileInput.current;
    if (files.length === 0) {
      setError("You need to add an image");
    }
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", process.env.REACT_APP_CLOUDINARY_PRESET);

    try {
      const { data } = await axios.post(
        process.env.REACT_APP_CLOUDINARY_URL,
        formData,
        {
          transformRequest: (data, headers) => {
            delete headers.common["x-access-token"];
            delete headers["x-access-token"];
            return data;
          },
        }
      );

      imageSubmit(data.secure_url);
      handleClose(true);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Card>
      <CardContent>
        <form>
          <Grid container spacing={2} direction="column">
            <Grid item container justify="space-between" alignItems="center">
              <Button
                onClick={() => handleClose(false)}
                color="secondary"
                variant="contained"
                style={{ marginRight: "20px" }}
              >
                Cancel
              </Button>
              <Grid item>
                <input type="file" accept="image/*" ref={fileInput} />
                <FormHelperText>{error}</FormHelperText>
              </Grid>
              <Button
                color="primary"
                variant="contained"
                onClick={handleImageUpload}
                style={{ marginLeft: "20px" }}
              >
                Add
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};
