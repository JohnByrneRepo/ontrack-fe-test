import { render, screen } from '@testing-library/react';
import BooksList from './BooksList';

test('renders books', () => {
  const data = {
    "books": [{
      "id": 2075,
      "book_author": [
        "Άγγελος, Χριστόφορος (†1638)"
      ],
      "book_title": "Enchiridion de institutis Graecorum",
      "book_publication_year": 1619,
      "book_publication_country": "Αγγλία",
      "book_publication_city": "Καίμπριτζ",
      "book_pages": 64,
    },
    {
      "id": 2090,
      "book_author": [
        "Ανώνυμος"
      ],
      "book_title": "Ο Αλέξανδρος ο Μακεδών",
      "book_publication_year": 1620,
      "book_publication_country": "Ιταλία",
      "book_publication_city": "Βενετία",
      "book_pages": 126
    },
    {
      "id": 2083,
      "book_author": [
        "Άγγελος, Χριστόφορος (†1638)"
      ],
      "book_title": "Of the conditions of the life in which the Greekes now live",
      "book_publication_year": 1625,
      "book_publication_country": "Αγγλία",
      "book_publication_city": "Λονδίνο",
      "book_pages": 10
    },
    {
      "id": 2091,
      "book_author": [
        "Ανώνυμος"
      ],
      "book_title": "Ο Αλέξανδρος ο Μακεδών",
      "book_publication_year": 1630,
      "book_publication_country": "Ιταλία",
      "book_publication_city": "Βενετία",
      "book_pages": 126
    }
    ],
    "count": 2425
  };

  render(<BooksList data={data} loading={false} />);
  const linkElement = screen.getByText(/Enchiridion de institutis Graecorum/i);
  expect(linkElement).toBeInTheDocument();
});
