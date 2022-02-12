import {
  Button,
  Card,
  CardContent,
  FormHelperText,
  Grid,
} from "@material-ui/core";
import { useState } from "react";

export const ImageUploadForm = ({ handleClose, imageSubmit }) => {
  const [error, setError] = useState("");

  const handleImageUpload = () => {
    const { files } = document.querySelector('input[type="file"]');
    if (files.length === 0) {
      setError("You need to add an image");
    }
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "hatchway-uploads");
    const options = {
      method: "POST",
      body: formData,
    };

    return fetch(
      "https://api.cloudinary.com/v1_1/csirinhatchway/image/upload",
      options
    )
      .then((res) => res.json())
      .then((res) => {
        imageSubmit(res.secure_url);
        handleClose(true);
      })
      .catch((err) => console.log(err));
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
                <input type="file" accept="image/*" />
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
