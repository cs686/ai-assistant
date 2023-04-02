import { IThemedStyleProps } from "../common/types";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    popupCard: {
      height: "100%",
    },
    footer: (props: IThemedStyleProps) =>
      props.isDesktopApp
        ? {
            color: props.theme.colors.contentSecondary,
            position: "fixed",
            width: "100%",
            height: "32px",
            cursor: "pointer",
            left: "0",
            bottom: "0",
            paddingLeft: "10px",
            display: "flex",
            alignItems: "center",
            background: props.themeType === "dark" ? "#1f1f1f" : "#fff",
          }
        : {
            color: props.theme.colors.contentSecondary,
            position: "absolute",
            cursor: "pointer",
            bottom: "10px",
            left: "10px",
            lineHeight: "1",
          },
    popupCardHeaderContainer: (props: IThemedStyleProps) =>
      props.isDesktopApp
        ? {
            position: "fixed",
            backdropFilter: "blur(10px)",
            zIndex: 1,
            left: 0,
            top: 0,
            width: "100%",
            boxSizing: "border-box",
            padding: "30px  10px 5px",
            background:
              props.themeType === "dark"
                ? "rgba(31, 31, 31, 0.5)"
                : "rgba(255, 255, 255, 0.5)",
            display: "flex",
            flexDirection: "row",
            flexFlow: "row nowrap",
            cursor: "move",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: `1px solid ${props.theme.colors.borderTransparent}`,
            "-ms-user-select": "none",
            "-webkit-user-select": "none",
            "user-select": "none",
          }
        : {
            display: "flex",
            flexDirection: "row",
            cursor: "move",
            alignItems: "center",
            padding: "5px 10px",
            borderBottom: `1px solid ${props.theme.colors.borderTransparent}`,
            minWidth: "580px",
            "-ms-user-select": "none",
            "-webkit-user-select": "none",
            "user-select": "none",
          },
    iconContainer: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      // flexShrink: 0,
      // marginRight: 'auto',
    },
    icon: {
      display: "block",
      width: "16px",
      height: "16px",
      "-ms-user-select": "none",
      "-webkit-user-select": "none",
      "user-select": "none",
    },
    iconText: (props: IThemedStyleProps) => ({
      color:
        props.themeType === "dark"
          ? props.theme.colors.contentSecondary
          : props.theme.colors.contentPrimary,
      fontSize: "12px",
      fontWeight: 600,
      cursor: "unset",
      "@media screen and (max-width: 570px)": {
        display: props.isDesktopApp ? "none" : undefined,
      },
    }),
    paragraph: {
      margin: "0.5em 0",
      "-ms-user-select": "text",
      "-webkit-user-select": "text",
      "user-select": "text",
    },
    popupCardHeaderButtonGroup: (props: IThemedStyleProps) => ({
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: "5px",
      marginLeft: "10px",
      "@media screen and (max-width: 460px)": {
        marginLeft: props.isDesktopApp ? "5px" : undefined,
      },
    }),
    popupCardHeaderActionsContainer: (props: IThemedStyleProps) => ({
      display: "flex",
      flexShrink: 0,
      flexDirection: "row",
      alignItems: "center",
      padding: "5px 10px",
      gap: "10px",
      "@media screen and (max-width: 460px)": {
        padding: props.isDesktopApp ? "5px 0" : undefined,
        gap: props.isDesktopApp ? "5px" : undefined,
      },
    }),
    from: {
      display: "flex",
      color: "#999",
      fontSize: "12px",
      flexShrink: 0,
    },
    arrow: {
      display: "flex",
      color: "#999",
      cursor: "pointer",
    },
    to: {
      display: "flex",
      color: "#999",
      fontSize: "12px",
      flexShrink: 0,
    },
    popupCardContentContainer: (props: IThemedStyleProps) => ({
      paddingTop: props.isDesktopApp ? "52px" : undefined,
      display: "flex",
      flexDirection: "column",
    }),
    loadingContainer: {
      margin: "0 auto",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: "10px",
    },
    popupCardEditorContainer: {
      display: "flex",
      flexDirection: "column",
      padding: "10px",
    },
    popupCardTranslatedContainer: (props: IThemedStyleProps) => ({
      position: "relative",
      display: "flex",
      padding: "16px 10px 10px 10px",
      "border-top": `1px solid ${props.theme.colors.borderTransparent}`,
      "-ms-user-select": "none",
      "-webkit-user-select": "none",
      "user-select": "none",
    }),
    actionStr: (props: IThemedStyleProps) => ({
      position: "absolute",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: "6px",
      top: "0",
      left: "50%",
      transform: "translateX(-50%) translateY(-50%)",
      fontSize: "10px",
      padding: "2px 12px",
      borderRadius: "4px",
      background: props.theme.colors.backgroundTertiary,
      color: props.theme.colors.contentSecondary,
    }),
    error: {
      background: "#f8d7da",
    },
    caret: {
      marginLeft: "4px",
      borderRight: "0.2em solid #777",
      animation: "$caret 500ms steps(44) infinite",
    },
    "@keyframes caret": {
      "50%": {
        borderColor: "transparent",
      },
    },
    popupCardTranslatedContentContainer: (props: IThemedStyleProps) => ({
      marginTop: "-14px",
      padding: "4px 8px",
      display: "flex",
      overflowY: "auto",
      color:
        props.themeType === "dark"
          ? props.theme.colors.contentSecondary
          : props.theme.colors.contentPrimary,
    }),
    errorMessage: {
      display: "flex",
      color: "red",
      alignItems: "center",
      gap: "4px",
    },
    actionButtonsContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: "12px",
      marginTop: "10px",
    },
    actionButton: (props: IThemedStyleProps) => ({
      color: props.theme.colors.contentSecondary,
      cursor: "pointer",
      display: "flex",
      paddingTop: "6px",
      paddingBottom: "6px",
    }),
    writing: {
      marginLeft: "3px",
      width: "10px",
      "&::after": {
        content: '"✍️"',
        animation: "$writing 1.3s infinite",
      },
    },
    "@keyframes writing": {
      "50%": {
        marginLeft: "-3px",
        marginBottom: "-3px",
      },
    },
    dropZone: (props: IThemedStyleProps) => ({
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      "padding-left": "3px",
      "padding-right": "3px",
      borderRadius: "0.75rem",
      cursor: "pointer",
      "-ms-user-select": "none",
      "-webkit-user-select": "none",
      "user-select": "none",
      border: `1px dashed ${props.theme.colors.borderTransparent}`,
      background: props.theme.colors.backgroundTertiary,
      color: props.theme.colors.contentSecondary,
    }),
    fileDragArea: (props: IThemedStyleProps) => ({
      padding: "10px",
      display: "flex",
      justifyContent: "center",
      marginBottom: "10px",
      fontSize: "11px",
      border: `2px dashed ${props.theme.colors.borderTransparent}`,
      background: props.theme.colors.backgroundTertiary,
      color: props.theme.colors.contentSecondary,
    }),
    OCRStatusBar: (props: IThemedStyleProps) => ({
      color: props.theme.colors.contentSecondary,
    }),
  });

export default useStyles