import { useSnackbar, VariantType } from "notistack";

let useSnackbarRef: any;

export const SnackbarUtilsConfigurator: React.FC = () => {
  useSnackbarRef = useSnackbar();
  return null
};

export const SnackbarUtilities = {
  showSnackbar(message: string, variant: VariantType = "default") {
    useSnackbarRef.enqueueSnackbar(message, { variant });
  },
  success(message: string) {
    this.showSnackbar(message, "success");
  },
  info(message: string) {
    this.showSnackbar(message, "info");
  },
  warning(message: string) {
    this.showSnackbar(message, "warning");
  },
  error(message: string) {
    this.showSnackbar(message, "error");
  },
};
