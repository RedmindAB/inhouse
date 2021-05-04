export type Reference = {
  file: {
    url: string
  }
  title: string
  contentful_id: string
}

export type BlogPostData = {
  createdAt: string
  headline: string
  preamble: {
    preamble: string
  }
  tags: string[]
  coverImage: {
    file: {
      url: string
    }
  }
  article: {
    raw: string
    references: Reference[]
  }
}
