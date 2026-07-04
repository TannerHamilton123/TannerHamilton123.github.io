import { useEffect } from "react";

const SITE_TITLE = "Tanner Hamilton Resume Site";

export default function useTitle(pageTitle) {
  useEffect(() => {
    document.title = `${pageTitle} | ${SITE_TITLE}`;
  }, [pageTitle]);
}
