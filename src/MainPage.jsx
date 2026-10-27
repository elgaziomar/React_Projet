import { useState } from "react";

import RecipeFilter from "./RecipeFilter";
import RecipList from "./RecipeList";
import RecipeForm from "./RecipeForm";
import Pagination from "./Pagination";
import Aide from "./Aide";

const initialRecipes = [
  {
    id: 1,
    nom: "Tacos méditerranéens",
    categorie: "Plat",
    ingredients: ["Tortilla", "Poulet", "Tomate", "Feta"],
    difficulte: 4,
    description: "Tacos légers et parfumés.",
    image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=300&q=80",
    createdAt: "2025-11-19T12:47:37.000Z"
  },
  {
    id: 2,
    nom: "Smoothie mangue",
    categorie: "Boisson",
    ingredients: ["Mangue", "Lait d'amande", "Miel"],
    difficulte: 1,
    description: "Boisson fraîche et fruitée.",
    image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=300&q=80",
    createdAt: "2025-11-19T12:47:37.000Z"
  },
  {
    id: 3,
    nom: "Salade Caprese",
    categorie: "Entrée",
    ingredients: ["Tomate", "Mozzarella", "Basilic", "Huile d'olive"],
    difficulte: 1,
    description: "Une entrée italienne classique, fraîche et rapide.",
    image: "https://images.unsplash.com/photo-1529312266912-b33cfce2eefd?auto=format&fit=crop&w=300&q=80",
    createdAt: "2025-11-20T10:15:00.000Z"
  },
  {
    id: 4,
    nom: "Burger Maison",
    categorie: "Plat",
    ingredients: ["Pain burger", "Viande hachée", "Fromage", "Salade", "Oignon"],
    difficulte: 3,
    description: "Burger généreux avec des frites maison.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=300&q=80",
    createdAt: "2025-11-20T13:30:22.000Z"
  },
  {
    id: 5,
    nom: "Tiramisu",
    categorie: "Dessert",
    ingredients: ["Mascarpone", "Café", "Biscuits cuillère", "Cacao"],
    difficulte: 3,
    description: "Le dessert italien incontournable au bon goût de café.",
    image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=300&q=80",
    createdAt: "2025-11-21T09:45:10.000Z"
  },
  {
    id: 6,
    nom: "Mojito sans alcool",
    categorie: "Boisson",
    ingredients: ["Menthe", "Citron vert", "Eau gazeuse", "Sirop de sucre"],
    difficulte: 2,
    description: "Cocktail rafraîchissant parfait pour l'été.",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=300&q=80",
    createdAt: "2025-11-21T16:20:00.000Z"
  },
  {
    id: 7,
    nom: "Soupe à l'oignon",
    categorie: "Entrée",
    ingredients: ["Oignons", "Bouillon de bœuf", "Pain", "Gruyère râpé"],
    difficulte: 2,
    description: "Soupe traditionnelle française gratinée au four.",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=300&q=80",
    createdAt: "2025-11-22T19:05:00.000Z"
  },
  {
    id: 8,
    nom: "Pancakes aux Myrtilles",
    categorie: "Dessert",
    ingredients: ["Farine", "Lait", "Œufs", "Myrtilles", "Sirop d'érable"],
    difficulte: 2,
    description: "Des pancakes moelleux pour un petit-déjeuner gourmand.",
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=300&q=80",
    createdAt: "2025-11-22T08:10:00.000Z"
  },
  {
    id: 9,
    nom: "Poulet au Curry",
    categorie: "Plat",
    ingredients: ["Poulet", "Lait de coco", "Pâte de curry", "Riz"],
    difficulte: 3,
    description: "Plat épicé et crémeux, servi avec du riz basmati.",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=300&q=80",
    createdAt: "2025-11-23T12:00:00.000Z"
  },
  {
    id: 10,
    nom: "Pizza Margherita",
    categorie: "Plat",
    ingredients: ["Pâte à pizza", "Sauce tomate", "Mozzarella", "Basilic"],
    difficulte: 3,
    description: "La pizza classique et indémodable.",
    image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=300&q=80",
    createdAt: "2025-11-23T20:00:00.000Z"
  }
];

function MainPage() {
  const [recipes, setRecipes] = useState(initialRecipes);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Toutes");
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [recipeToEdit, setRecipeToEdit] = useState(null);

  const perPage = 4;

  const filtered = recipes.filter((r) => {
    const matchName = r.nom.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === "Toutes" || r.categorie === category;
    return matchName && matchCategory;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const page = Math.min(currentPage, totalPages);
  const paginated = filtered.slice((page - 1) * perPage, page * perPage);

  function handleSearch(value) {
    setSearch(value);
    setCurrentPage(1);
  }

  function handleCategory(value) {
    setCategory(value);
    setCurrentPage(1);
  }

  function openCreate() {
    setRecipeToEdit(null);
    setShowModal(true);
  }

  function handleEdit(recipe) {
    setRecipeToEdit(recipe);
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
    setRecipeToEdit(null);
  }

  function handleDelete(id) {
    setRecipes(recipes.filter((r) => r.id !== id));
  }

  function handleDuplicate(recipe) {
    const copy = {
      ...recipe,
      id: Date.now(),
      createdAt: new Date().toISOString(),
    };
    setRecipes([...recipes, copy]);
  }

  function handleSave(data) {
    if (recipeToEdit) {
      setRecipes(
        recipes.map((r) => (r.id === recipeToEdit.id ? { ...r, ...data } : r))
      );
    } else {
      const newRecipe = {
        ...data,
        id: Date.now(),
        createdAt: new Date().toISOString(),
      };
      setRecipes([...recipes, newRecipe]);
    }
    closeModal();
  }

  const button = {
    padding: "8px 12px",
    border: "none",
    borderRadius: 8,
    background: "#e5e7eb",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: 13,
  };

  const field = {
    padding: "8px 10px",
    border: "1px solid #d1d5db",
    borderRadius: 8,
    fontSize: 14,
    width: "100%",
    boxSizing: "border-box",
  };

  const badge = {
    background: "#dbeafe",
    color: "#2563eb",
    padding: "3px 8px",
    borderRadius: 8,
    fontSize: 12,
  };

  const styles = {
    page: {
      minHeight: "100vh",
      background: "#f3f4f6",
      fontFamily: "Arial, sans-serif",
      color: "#1f2937",
    },
    container: { maxWidth: 1100, margin: "0 auto", padding: 20 },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: 12,
      marginBottom: 20,
    },
    title: { fontSize: 22, margin: 0 },
    headerRight: { display: "flex", gap: 10, flexWrap: "wrap" },
    content: { display: "flex", gap: 20, alignItems: "flex-start" },
    left: { flex: 1 },

    button: button,
    primaryButton: { ...button, background: "#3b82f6", color: "white" },
    blueButton: { ...button, background: "#e0e7ff", color: "#3730a3" },
    redButton: { ...button, background: "#fee2e2", color: "#b91c1c" },
    field: field,
    badge: badge,

    filterBox: { display: "flex", gap: 10 },
    filterField: { ...field, width: "auto" },

    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))",
      gap: 16,
    },

    card: {
      background: "white",
      borderRadius: 12,
      overflow: "hidden",
      boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
    },
    image: { width: "100%", height: 160, objectFit: "cover" },
    cardBody: { padding: 12 },
    cardTop: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 8,
    },
    cardTitle: { margin: 0, fontSize: 16 },
    chips: { display: "flex", flexWrap: "wrap", gap: 6, margin: "8px 0" },
    chip: {
      border: "1px solid #e5e7eb",
      borderRadius: 999,
      padding: "3px 8px",
      fontSize: 12,
    },
    buttons: { display: "flex", gap: 8, marginTop: 10 },

    pagination: {
      display: "flex",
      justifyContent: "center",
      gap: 6,
      marginTop: 20,
    },
    pageButton: button,
    pageButtonActive: { ...button, background: "#3b82f6", color: "white" },

    aide: {
      width: 260,
      background: "white",
      padding: 16,
      borderRadius: 12,
      boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
      fontSize: 14,
    },
    aideTop: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    aideTitle: { margin: 0 },

    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "rgba(0,0,0,0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: 16,
    },
    modal: {
      background: "white",
      width: "100%",
      maxWidth: 450,
      maxHeight: "90vh",
      overflowY: "auto",
      padding: 20,
      borderRadius: 12,
      display: "flex",
      flexDirection: "column",
      gap: 8,
    },
    modalHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    modalTitle: { margin: 0, fontSize: 18 },
    row: { display: "flex", gap: 8 },
    bottomButtons: { display: "flex", gap: 8, marginTop: 10 },
    grow: { flex: 1 },
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <header style={styles.header}>
          <h1 style={styles.title}>🍽️ Creative Recipe Builder</h1>
          <div style={styles.headerRight}>
            <RecipeFilter
              styles={styles}
              search={search}
              category={category}
              onSearchChange={handleSearch}
              onCategoryChange={handleCategory}
            />
            <button style={styles.primaryButton} onClick={openCreate}>
              + Créer une nouvelle recette
            </button>
          </div>
        </header>

        <div style={styles.content}>
          <div style={styles.left}>
            <RecipList
              styles={styles}
              recipes={paginated}
              onEdit={handleEdit}
              onDuplicate={handleDuplicate}
              onDelete={handleDelete}
            />
            <Pagination
              styles={styles}
              currentPage={page}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
          <Aide styles={styles} />
        </div>

        {showModal && (
          <RecipeForm
            styles={styles}
            recipeToEdit={recipeToEdit}
            onSave={handleSave}
            onClose={closeModal}
          />
        )}
      </div>
    </div>
  );
}

export default MainPage;