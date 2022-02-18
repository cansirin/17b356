import {Box, Dialog, DialogContent, DialogTitle} from "@material-ui/core";
import { ImageUploadForm } from "./ImageUploadForm";

export const ImageUploadDialog = ({ open, dialogControl, imageSubmit }) => {
  return (
    <Box>
      <Dialog open={open} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add images</DialogTitle>
        <DialogContent>
          <ImageUploadForm
            handleClose={dialogControl}
            imageSubmit={imageSubmit}
          />
        </DialogContent>
      </Dialog>
    </Box>
  );
};
