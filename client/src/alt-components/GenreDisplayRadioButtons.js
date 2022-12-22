import { useState } from "react";

function GenreDisplay() {
  const [selectedGenre, setSelectedGenre] = useState("none");

  return (
    <div>
      <div>
        <div class="flex flex-row flex-wrap justify-between">
          <RadioButton
            label="R&B"
            value={selectedGenre === "R&B"}
            onChange={() => setSelectedGenre("R&B")}
          />
          <RadioButton
            label="Pop"
            value={selectedGenre === "Pop"}
            onChange={() => setSelectedGenre("Pop")}
          />
          <RadioButton
            label="Hip-Hop"
            value={selectedGenre === "Hip-Hop"}
            onChange={() => setSelectedGenre("Hip-Hop")}
          />
          <RadioButton
            label="Country"
            value={selectedGenre === "Country"}
            onChange={() => setSelectedGenre("Country")}
          />
          <RadioButton
            label="Rock"
            value={selectedGenre === "Rock"}
            onChange={() => setSelectedGenre("Rock")}
          />
          <RadioButton
            label="Jazz"
            value={selectedGenre === "Jazz"}
            onChange={() => setSelectedGenre("Jazz")}
          />
          <RadioButton
            label="Electronic"
            value={selectedGenre === "Electronic"}
            onChange={() => setSelectedGenre("Electronic")}
          />
          <RadioButton
            label="Latin"
            value={selectedGenre === "Latin"}
            onChange={() => setSelectedGenre("Latin")}
          />
          <RadioButton
            label="Afrobeats"
            value={selectedGenre === "Afrobeats"}
            onChange={() => setSelectedGenre("Afrobeats")}
          />
        </div>
      </div>
      <div></div>
    </div>
  );
}

const RadioButton = ({ label, value, onChange }) => {
  return (
    <div class="flex flex-row">
      <label class="uppercase text-md">
        <div class="flex flex-row justify-center">
          <input
            type="radio"
            name={label}
            class="radio checked:radio-secondary"
            checked={value}
            onChange={onChange}
          />
        </div>

        {label}
      </label>
    </div>
  );
};

export default GenreDisplay;
