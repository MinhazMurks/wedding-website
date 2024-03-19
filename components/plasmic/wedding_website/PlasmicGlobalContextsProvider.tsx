// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: izEXE37dzqFMYydSKQTMwJ

import * as React from "react";
import { hasVariant, ensureGlobalVariants } from "@plasmicapp/react-web";
import { CmsCredentialsProvider } from "@plasmicpkgs/plasmic-cms";
import { AntdConfigProvider } from "@plasmicpkgs/antd5/skinny/registerConfigProvider";

export interface GlobalContextsProviderProps {
  children?: React.ReactElement;
  cmsCredentialsProviderProps?: Partial<
    Omit<React.ComponentProps<typeof CmsCredentialsProvider>, "children">
  >;
  antdConfigProviderProps?: Partial<
    Omit<React.ComponentProps<typeof AntdConfigProvider>, "children">
  >;
}

export default function GlobalContextsProvider(
  props: GlobalContextsProviderProps
) {
  const { children, cmsCredentialsProviderProps, antdConfigProviderProps } =
    props;

  return (
    <CmsCredentialsProvider
      {...cmsCredentialsProviderProps}
      databaseId={
        cmsCredentialsProviderProps &&
        "databaseId" in cmsCredentialsProviderProps
          ? cmsCredentialsProviderProps.databaseId!
          : undefined
      }
      databaseToken={
        cmsCredentialsProviderProps &&
        "databaseToken" in cmsCredentialsProviderProps
          ? cmsCredentialsProviderProps.databaseToken!
          : undefined
      }
      host={
        cmsCredentialsProviderProps && "host" in cmsCredentialsProviderProps
          ? cmsCredentialsProviderProps.host!
          : "https://data.plasmic.app"
      }
      locale={
        cmsCredentialsProviderProps && "locale" in cmsCredentialsProviderProps
          ? cmsCredentialsProviderProps.locale!
          : undefined
      }
    >
      <AntdConfigProvider
        {...antdConfigProviderProps}
        borderRadius={
          antdConfigProviderProps && "borderRadius" in antdConfigProviderProps
            ? antdConfigProviderProps.borderRadius!
            : 6
        }
        colorBgBase={
          antdConfigProviderProps && "colorBgBase" in antdConfigProviderProps
            ? antdConfigProviderProps.colorBgBase!
            : "#ffffff"
        }
        colorError={
          antdConfigProviderProps && "colorError" in antdConfigProviderProps
            ? antdConfigProviderProps.colorError!
            : "#ff4d4f"
        }
        colorInfo={
          antdConfigProviderProps && "colorInfo" in antdConfigProviderProps
            ? antdConfigProviderProps.colorInfo!
            : "#1677ff"
        }
        colorPrimary={
          antdConfigProviderProps && "colorPrimary" in antdConfigProviderProps
            ? antdConfigProviderProps.colorPrimary!
            : "#1677ff"
        }
        colorSuccess={
          antdConfigProviderProps && "colorSuccess" in antdConfigProviderProps
            ? antdConfigProviderProps.colorSuccess!
            : "#52c41a"
        }
        colorWarning={
          antdConfigProviderProps && "colorWarning" in antdConfigProviderProps
            ? antdConfigProviderProps.colorWarning!
            : "#faad14"
        }
        controlHeight={
          antdConfigProviderProps && "controlHeight" in antdConfigProviderProps
            ? antdConfigProviderProps.controlHeight!
            : 32
        }
        defaultDark={
          antdConfigProviderProps && "defaultDark" in antdConfigProviderProps
            ? antdConfigProviderProps.defaultDark!
            : false
        }
        lineWidth={
          antdConfigProviderProps && "lineWidth" in antdConfigProviderProps
            ? antdConfigProviderProps.lineWidth!
            : 1
        }
        loadingText={
          antdConfigProviderProps && "loadingText" in antdConfigProviderProps
            ? antdConfigProviderProps.loadingText!
            : undefined
        }
        removeLoading={
          antdConfigProviderProps && "removeLoading" in antdConfigProviderProps
            ? antdConfigProviderProps.removeLoading!
            : undefined
        }
        sizeStep={
          antdConfigProviderProps && "sizeStep" in antdConfigProviderProps
            ? antdConfigProviderProps.sizeStep!
            : 4
        }
        sizeUnit={
          antdConfigProviderProps && "sizeUnit" in antdConfigProviderProps
            ? antdConfigProviderProps.sizeUnit!
            : 4
        }
        themeStyles={
          antdConfigProviderProps && "themeStyles" in antdConfigProviderProps
            ? antdConfigProviderProps.themeStyles!
            : true
            ? {
                fontFamily: "IBM Plex Sans",
                fontSize: "14px",
                fontWeight: "normal",
                lineHeight: "1.5",
                color: "rgb(222,245,239)",
                letterSpacing: "normal"
              }
            : undefined
        }
        wireframe={
          antdConfigProviderProps && "wireframe" in antdConfigProviderProps
            ? antdConfigProviderProps.wireframe!
            : false
        }
      >
        {children}
      </AntdConfigProvider>
    </CmsCredentialsProvider>
  );
}
