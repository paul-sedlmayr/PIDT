import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import FeaturedLinks from './quartz/components/FeaturedLinks'

// Link to your custom CSS file
const customCSSLink = "<link rel='stylesheet' href='./quartz/styles/custom.css'>";

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: [Component.Head(), customCSSLink],
  header: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jackyzha0/quartz",
      "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    // Component.DesktopOnly(Component.Explorer()),
    Component.DesktopOnly(Component.TableOfContents()),
    // Component.TableOfContents(),
  ],
  right: [
    // Component.Graph(),
    
    // Component.Backlinks(),
    FeaturedLinks({
      links: [
        { label: "GitHub", url: "https://github.com/jackyzha0/quartz" },
        { label: "Discord Community", url: "https://discord.gg/cRFFHYye7t" },
        { label: "Link", url: "https://scholars.duke.edu/publication/741732" },
        // Add more links here
      ]
    }),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [
    FeaturedLinks({
      links: [
        { label: "GitHub", url: "https://github.com/jackyzha0/quartz" },
        { label: "Discord Community", url: "https://discord.gg/cRFFHYye7t" },
        { label: "Link", url: "https://scholars.duke.edu/publication/741732" },
        // Add more links here
      ]
    }),
  ],
}
